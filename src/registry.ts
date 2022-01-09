import Sequence from "./sequence";
import Snake from "./sequences/snake";
import Osc from "./sequences/osc";

interface RegisterEntry {
    author: string;
    sequence: Sequence;
}

const register: RegisterEntry[] = [
    {
        author: "@ulrikah",
        sequence: new Snake(),
    },
    {
        author: "@ulrikah",
        sequence: new Osc(),
    },
];
export default register;
