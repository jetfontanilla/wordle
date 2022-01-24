export class LetterState {
    value = "";
    correct?: boolean;
    exists?: boolean;
}

export class Attempt {
    state: LetterState[] = [];
    readonly = false;
}
