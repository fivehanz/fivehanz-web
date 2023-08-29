defmodule AppWeb.AuthOverrides do
  @moduledoc """
  Auth overrides
  """
  use AshAuthentication.Phoenix.Overrides
  alias AshAuthentication.Phoenix.{Components, SignInLive}

  override SignInLive do
    set :root_class, "flex flex-col items-center justify-center my-24"
  end

  override Components.Banner do
    set :image_url, "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
  end

  override Components.SignIn do
    set :root_class, "card variant-ghost py-2 px-4 my-4"
  end

  override Components.Password.Input do
    set :submit_class, "mt-4 btn variant-filled-primary min-w-full"
    set :label_class, "label"
    set :input_class, "mt-2 input"
    set :input_class_with_error, "mt-2 input input-error"
  end
end
