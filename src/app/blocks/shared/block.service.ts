import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Block } from './block.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlockService {

  constructor(private http: Http) {}
  
  blocksUrl = './block-data.json';
  
  getBlocks(): Observable<Block[]> {
    return this.http.get(this.blocksUrl)
                    .map((res: Response) => res.json());
  }

}
