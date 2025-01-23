import type { LoaderFunction } from "react-router";

export namespace Route {
  export type LoaderArgs = {};
  export type LoaderData = {
    todos: Array<{
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }>;
  };
  export type Loader = LoaderFunction<LoaderArgs, LoaderData>;
}
