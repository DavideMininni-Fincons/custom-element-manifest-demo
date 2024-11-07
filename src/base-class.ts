import {LitElement} from "lit";
import {MixinClass} from "./mixin-class";

export abstract class BaseElement extends MixinClass(LitElement) {
    protected abstract open(): void;

    /** Base class jsDoc. */
    public override accessor value: string = 'Value';
}
