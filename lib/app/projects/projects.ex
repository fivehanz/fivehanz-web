defmodule App.Projects do
  @moduledoc """
  The Projects context.
  """
  use Ash.Api

  resources do
    registry App.Projects.Registry
  end
end
