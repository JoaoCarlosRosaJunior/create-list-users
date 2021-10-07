import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    /**
     * []Só pode listar se o id for de um admin
     * []Só pode listar se o usuário que estiver requerindo for válido
     */

    const userAdmin = this.usersRepository.findById( user_id );

    if( !userAdmin) {
      throw new Error("This user don't exist");
    } else if( !userAdmin.admin ) {
      throw new Error("This user isn't admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
