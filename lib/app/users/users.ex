defmodule App.Users do
  @moduledoc """
  The Users context.
  """
  use Ash.Api,
    extensions: [AshAdmin.Api]

  admin do
    show?(true)
  end

  resources do
    registry App.Users.Registry
  end
end
