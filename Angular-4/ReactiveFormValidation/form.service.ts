

import {Injectable} from '@angular/core' ;
import {UserInterface} from './interface' ;


@Injectable() // angular suggests to keep it even you dnt have any dependency.
export class DataService {    
getData(): UserInterface[]{
return [
    {userName : 'hari'},
    {userName : 'sam'},
    {userName : 'JESUS'}
];
} 
    
}
