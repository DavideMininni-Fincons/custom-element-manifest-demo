import {html, type TemplateResult} from "lit";
import {customElement} from 'lit/decorators.js';
import {BaseElement} from "./base-class";

@customElement('sbb-popover')
export class DerivedElement extends BaseElement {
    public open(): void {
        console.log('Hello')
    }

    protected render(): TemplateResult {
        return html`<button onclick=${() => open()}></button>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'derived-element': DerivedElement;
    }
}
