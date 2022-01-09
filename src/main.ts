import "./style.css";
import registry from "./registry";
import paper from "paper";

const main = () => {
    const app = document.querySelector<HTMLDivElement>("#app")!;

    const authorNames = [
        ...new Set(registry.map((entry) => entry.author)),
    ].join(", ");

    app.innerHTML = `
        <div>
            <p>
                <b>
                    <a href="https://github.com/ulrikah/sekvenser">sequences</a>
                </b> by ${authorNames}
            </p>
        </div>
    `;

    const sequenceContainer = document.createElement("div");
    sequenceContainer.classList.add("sequence-container");

    registry.forEach((entry) => {
        const entryElement: HTMLDivElement = document.createElement("div");

        entryElement.className = "sequence";
        // // TODO: how to make canvas fill the entire parent div?
        entryElement.appendChild(entry.sequence.canvas);
        sequenceContainer.appendChild(entryElement);
        // app.appendChild(entry.sequence.canvas);
        // entry.sequence.setup();
    });
    app.appendChild(sequenceContainer);

    registry.forEach((entry) => entry.sequence.setup());
    paper.view.onFrame = (event: any) => {
        registry.forEach((entry) => entry.sequence.step(event.frameCount));
    };
};

main();
