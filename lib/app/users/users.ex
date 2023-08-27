defmodule App.Users do
  @moduledoc """
  The Users context.
  """
  use Ash.Api

  resources do
    registry App.Users.Registry
  end
end
