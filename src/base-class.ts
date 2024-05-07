import {LitElement} from "lit";

export abstract class BaseElement extends LitElement {
    protected abstract open(): void;
}
