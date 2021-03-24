/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    
    const userIsNotExists = this.usersRepository.findById(user_id)

    if(!userIsNotExists){
      throw new Error('User is not exists!')
    }

    return userIsNotExists

  }
}

export { ShowUserProfileUseCase };
