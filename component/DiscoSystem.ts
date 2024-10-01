export enum ConstraintType {
    leq, l, eq, g, geq
}

export interface Constraint {
    variable: string,
    value:number
    type:ConstraintType
}

export enum AnswerType {
    redTry, whiteTry, normal
}

export interface Answer {
    content: string,
    type: AnswerType,
    callback: Function
}

interface Question {
    name: string,
    constraints: Array<Constraint>,
    content: string,
    answers: Array<Answer>,
    done: boolean,
    callback: Function,
    next: Map<number, Question|Say>
}

interface Say {
    name: string,
    constraints: Array<Constraint>
    content: string,
    done: boolean,
    callback: Function,
    next: Map<number, Question|Say>
}

export class DiscoSystem {
    private static _instance: DiscoSystem;

    private constructor() {

    }

    private static judgeData = new Map<string, number>();

    private static dialogueRoot = {
        name: "root",
        constraints: [],
        content: "",
        answers: [],
        done: false,
        callback: () => {},
        next: new Map<number, Say|Question>()
    } as Question;

    private static dialogueStack = new Array<number>();

    private static generatingDialogueStack = [0];

    public static clear() {
        this.dialogueStack = new Array<number>();
        this.generatingDialogueStack = [0];
        this.judgeData = new Map<string, number>();
    }

    public static newRoute() {
        this.generatingDialogueStack.pop(); // remove 0 that added in say or question
        if(this.generatingDialogueStack.length === 1) {
            this.dialogueRoot.answers.push();
            this.generatingDialogueStack.push(this.dialogueRoot.next.size);
            return DiscoSystem;
        }

        var dialogues = new Array<Question|Say>;
        dialogues.push(this.dialogueRoot.next.get(this.generatingDialogueStack[0]) as Question|Say);
        for(let i = 1; i < this.generatingDialogueStack.length; ++i) {
            dialogues.push(dialogues[i - 1].next.get(this.generatingDialogueStack[i]) as Question|Say);
        }

        for(let i = 0; i < this.generatingDialogueStack.length; ++i) {
            var t = dialogues[dialogues.length - 1];

            if(t.answers !== undefined) {
                if((t as Question).answers.length > (t as Question).next.size) {
                    this.generatingDialogueStack.push((t as Question).next.size);
                    break;
                }
            }

            dialogues.pop();
            this.generatingDialogueStack.pop();
        }
        return DiscoSystem;
    }

    /**  */
    public static question(name:string, constraints:Array<Constraint>, question:string, answers:Array<Answer>, callback:Function) {
        var dialogue:Question|Say = this.dialogueRoot;
        for(let i = 0; i < this.generatingDialogueStack.length - 1; ++i) {
            dialogue = dialogue.next.get(this.generatingDialogueStack[i]) as Question|Say;
        }
        dialogue.next.set(this.generatingDialogueStack[this.generatingDialogueStack.length - 1], {
            name: name,
            answers: answers,
            constraints: constraints,
            content: question,
            done: false,
            next: new Map<number, Question|Say>(),
            callback: callback
        } as Question);
        this.generatingDialogueStack.push(0);
        return DiscoSystem;
    }

    public static say(name:string, constraints:Array<Constraint>, content:string, callback: Function) {
        let dialogue:Question|Say = this.dialogueRoot;
        for(let i = 0; i < this.generatingDialogueStack.length - 1; ++i) {
            dialogue = dialogue.next.get(this.generatingDialogueStack[i]) as Question|Say;
        }
        dialogue.next.set(this.generatingDialogueStack[this.generatingDialogueStack.length - 1], {
            name: name,
            constraints: constraints,
            content: content,
            done: false,
            next: new Map<number, Question|Say>(),
            callback: callback
        } as Question);
        this.generatingDialogueStack.push(0);
        return DiscoSystem;
    }

    public static print(dialogue:Question|Say) {
        if(dialogue.answers !== undefined) { // Question
            (dialogue as Question).answers.forEach((ans) => {
                switch(ans.type) {
                    case AnswerType.normal:
                        console.log(`normal: ${ans.content}`);
                        break;
                    case AnswerType.redTry:
                        console.log(`redTry: ${ans.content}`);
                        break;
                    case AnswerType.whiteTry:
                        console.log(`whiteTry: ${ans.content}`);
                        break;
                }
            })
        }
    }

    public next(index:number = 0) {
        let valid = true;
        let dialogue:Question|Say = DiscoSystem.dialogueRoot;
        DiscoSystem.dialogueStack.forEach((value) => {
            dialogue = dialogue.next.get(value) as Question|Say;
        })
        if(dialogue.next.size > index) {
            DiscoSystem.dialogueStack.push(index);
            dialogue = dialogue.next.get(index) as Question|Say;
        }
        else {
            let dialogues = new Array<Question|Say>;
            dialogues.push(DiscoSystem.dialogueRoot.next.get(DiscoSystem.dialogueStack[0]) as Question|Say);
            for(let i = 1; i < DiscoSystem.dialogueStack.length; ++i) {
                dialogues.push(dialogues[i - 1].next.get(DiscoSystem.dialogueStack[i]) as Question|Say);
            }
            for(let i = 0; i < DiscoSystem.dialogueStack.length; ++i) {
                var t = dialogues.pop() as Question|Say;

                if(t.answers !== undefined) { // Question
                    dialogue = t;
                    break;
                }

                DiscoSystem.dialogueStack.pop();
            }
        }
        const constraints = dialogue.constraints;
        constraints.forEach(constraint => {
            switch(constraint.type) {
                case ConstraintType.leq:
                    if(!DiscoSystem.judgeData.has(constraint.variable) || DiscoSystem.judgeData.get(constraint.variable) as number > constraint.value) {
                        valid = false;
                        return;
                    }
                case ConstraintType.l:
                    if(!DiscoSystem.judgeData.has(constraint.variable) || DiscoSystem.judgeData.get(constraint.variable) as number >= constraint.value) {
                        valid = false;
                        return;
                    }
                case ConstraintType.eq:
                    if(!DiscoSystem.judgeData.has(constraint.variable) || DiscoSystem.judgeData.get(constraint.variable) as number != constraint.value) {
                        valid = false;
                        return;
                    }
                case ConstraintType.g:
                    if(!DiscoSystem.judgeData.has(constraint.variable) || DiscoSystem.judgeData.get(constraint.variable) as number <= constraint.value) {
                        valid = false;
                        return;
                    }
                case ConstraintType.geq:
                    if(!DiscoSystem.judgeData.has(constraint.variable) || DiscoSystem.judgeData.get(constraint.variable) as number < constraint.value) {
                        valid = false;
                        return;
                    }
            }
        })

        dialogue.done = true;
        if(valid) {
            DiscoSystem.print(dialogue);
            dialogue.callback();
            if(dialogue.answers !== undefined) { // Question
                for(let i = 0; i < (dialogue as Question).answers.length; ++i) {
                }
            }
            else {

            }
        }
        else {
            this.next();
        }
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }
}

export var discoInst = DiscoSystem.instance;