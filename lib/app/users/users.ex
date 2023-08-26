defmodule App.Users do
  use Ash.Api

  resources do
    registry App.Users.Registry
  end
end
