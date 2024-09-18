import { FunctionBody } from "typescript";

enum ConstraintType {
    leq, l, eq, g, geq
}

interface Constraint {
    variable: string,
    value:number
    type:ConstraintType
}

enum AnswerType {
    redTry, whiteTry, normal
}

interface Answer {
    content: string,
    type: AnswerType,
    callback: Function
}

class DiscoSystem {
    private static _instance: DiscoSystem;

    private constructor() {

    }

    private judgeData:Map<string, number> = new Map();

    /** last question must exit question if stepIn is true */
    public question(name:String, constraints:Array<Constraint>, question:String, answers:Array<Answer>, stepIn:boolean) {
        var valid = true;
        constraints.forEach(constraint => {
            switch(constraint.type) {
                case ConstraintType.leq:
                    if(!this.judgeData.has(constraint.variable) || this.judgeData[constraint.variable] > constraint.value) {
                        valid = false;
                        return;
                    }
                case ConstraintType.l:
                    if(!this.judgeData.has(constraint.variable) || this.judgeData[constraint.variable] >= constraint.value) {
                        valid = false;
                        return;
                    }
                case ConstraintType.eq:
                    if(!this.judgeData.has(constraint.variable) || this.judgeData[constraint.variable] != constraint.value) {
                        valid = false;
                        return;
                    }
                case ConstraintType.g:
                    if(!this.judgeData.has(constraint.variable) || this.judgeData[constraint.variable] <= constraint.value) {
                        valid = false;
                        return;
                    }
                case ConstraintType.geq:
                    if(!this.judgeData.has(constraint.variable) || this.judgeData[constraint.variable] < constraint.value) {
                        valid = false;
                        return;
                    }
            }
        });
        if(!valid) {
            return;
        }


    }

    public say(name:String, constraints:Array<Constraint>, content:String) {

    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }
}