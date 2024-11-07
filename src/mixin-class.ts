import type {LitElement} from "lit";

type Constructor<T> = new (...args: any[]) => T;

export declare class MixinType {
  public accessor value: string;
}

export const MixinClass = <T extends Constructor<LitElement>>(superclass: T): Constructor<MixinType> & T => {
  class MixinElement extends superclass implements MixinType {
    /** Mixin jsDoc. */
    public accessor value: string = '';
  }
  return MixinElement;
}
