import { Pipe, PipeTransform } from '@angular/core';
import { Block } from './block.model';

@Pipe({
    name: 'blockSearch'
})
export class BlockSearchPipe implements PipeTransform {
    transform(blocks: Block[], arg: string) {
        if (arg) {
            const str = arg.toLowerCase();
            const filteredBlocks = blocks.filter(block => {
                const name = block.name.toLowerCase();
                return name.indexOf(str) > -1;
            });
            
            return filteredBlocks;
        } else {
            return blocks;
        }
    }
}