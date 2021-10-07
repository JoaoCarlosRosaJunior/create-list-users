import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const userAdmin = this.turnUserAdminUseCase.execute({ user_id });

    return response.status(200).json(userAdmin);
  }
}

export { TurnUserAdminController };
