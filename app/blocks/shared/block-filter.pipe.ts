import { Pipe, PipeTransform } from '@angular/core';
import { Block } from './block.model';

@Pipe({
    name: 'nguBlockFilter'
})
export class BlockFilterPipe implements PipeTransform {
    transform(blocks: Block[], arg: string) {
        if (arg) {
            return blocks.filter(block => block.status === arg);
        } else {
            return blocks;
        }
    }
}
