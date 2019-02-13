import { Message } from './message';
import {Observable} from 'rxjs/internal/Observable';

export declare class MessageService {
    private messageSource;
    private clearSource;
    messageObserver: Observable<Message | Message[]>;
    clearObserver: Observable<string>;
    add(message: Message): void;
    addAll(messages: Message[]): void;
    clear(key?: string): void;
}
