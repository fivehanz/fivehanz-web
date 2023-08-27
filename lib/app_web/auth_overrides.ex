defmodule AppWeb.AuthOverrides do
  @moduledoc """
  Auth overrides
  """
  use AshAuthentication.Phoenix.Overrides
  alias AshAuthentication.Phoenix.{Components, SignInLive}

  # override SignInLive do
  #   # set :root_class, ""
  # end

  override Components.Banner do
    set :image_url, "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
  end

  override Components.SignIn do
    set :show_banner, false
    set :root_class, "card variant-ghost p-4 my-8 max-w-md mx-auto"
  end
end
