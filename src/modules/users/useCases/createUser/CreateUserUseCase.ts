/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {

    const emailAlreadyExits = this.usersRepository.findByEmail(email)

    if(emailAlreadyExits){
      throw new Error('Email already exists!')
    }

   return this.usersRepository.create({name, email})
  }
}

export { CreateUserUseCase };
