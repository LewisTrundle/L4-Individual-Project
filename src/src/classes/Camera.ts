export class Camera {
  name: string;
  #button: string;
  #mode: string;
  #isPeer: any;

  constructor(name: string, button: string, mode: string, isPeer: boolean = false) {
    this.name = name;
    this.#button = button;
    this.#mode = mode;
    this.#isPeer = isPeer;
  };

  getName(): string { 
    return this.name; 
  };

  getIsPeer(): boolean {
    return this.#isPeer;
  };

  getButton(): string {
    return this.#button;
  };

  getMode(): string {
    return this.#mode;
  };
};