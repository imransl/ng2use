import { Pipe, PipeTransform } from '@angular/core';
import { Block } from './block.model';

@Pipe({
    name: 'blockSearch'
})
export class BlockSearchPipe implements PipeTransform {
    transform(blocks: Block[], arg: string) {
        if (arg) {
            return blocks.filter(block => {
                return name.toLowerCase().indexOf(arg.toLocaleLowerCase()) > -1;
            });
        } else {
            return blocks;
        }
    }
}