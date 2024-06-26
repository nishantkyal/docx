import { SpaceType } from "@file/shared";
import { XmlAttributeComponent } from "@file/xml-components";

export class TextAttributes extends XmlAttributeComponent<{
    readonly space: (typeof SpaceType)[keyof typeof SpaceType];
}> {
    protected readonly xmlKeys = { space: "xml:space" };
}
