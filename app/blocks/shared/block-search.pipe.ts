import { Pipe, PipeTransform } from '@angular/core';
import { Block } from './block.model';

@Pipe({
    name: 'nguBlockSearch'
})
export class BlockSearchPipe implements PipeTransform {
    transform(blocks: Block[], arg: string) {
        if (arg) {
            return blocks.filter(block => block.name.toLowerCase().indexOf(arg.toLowerCase()) > -1);
        } else {
            return blocks;
        }
    }
}
