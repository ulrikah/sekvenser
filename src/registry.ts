import Sequence from "./sequence";
import First from "./sequences/first";
import Second from "./sequences/second";

interface RegisterEntry {
    author: string;
    sequence: Sequence;
}

const register: RegisterEntry[] = [
    {
        author: "@ulrikah",
        sequence: new First(),
    },
    {
        author: "@ulrikah",
        sequence: new Second(),
    },
    {
        author: "@ulrikah",
        sequence: new First(),
    },
    {
        author: "@ulrikah",
        sequence: new Second(),
    },
];
export default register;
