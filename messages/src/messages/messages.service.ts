import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    constructor(private readonly messagesRepository: MessagesRepository) {}
    
    async findOne(id: string) {
        const message = await this.messagesRepository.findOne(id);
        return message;
    }
    
    async findAll() {
        const messages = await this.messagesRepository.findAll();
        return messages;
    }
    
    async create(content: string) {
        834await this.messagesRepository.create(content);
    }
}