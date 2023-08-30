defmodule App.Projects do
  @moduledoc """
  The Projects context.
  """
  use Ash.Api,
    extensions: [AshAdmin.Api]

  admin do
    show?(true)
  end

  resources do
    registry App.Projects.Registry
  end
end
