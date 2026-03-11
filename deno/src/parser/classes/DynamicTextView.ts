import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class DynamicTextView extends YTNode {
  static type = 'DynamicTextView';

  text: Text;
  max_lines: number;

  constructor(data: RawNode) {
    super();
    this.text = Text.fromAttributed(data.text);
    this.max_lines = parseInt(data.maxLines);
  }
}