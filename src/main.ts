import "./style.css";
import registry from "./registry";

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
        entryElement.innerHTML = `<p>${entry.author}</p>`;

        // TODO: how to make canvas fill the entire parent div?
        const canvasElement: HTMLCanvasElement =
            document.createElement("canvas");

        entryElement.appendChild(canvasElement);
        sequenceContainer.appendChild(entryElement);
    });
    app.appendChild(sequenceContainer);
};

main();
