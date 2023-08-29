defmodule AppWeb.DashboardController do
  use AppWeb, :controller
  use AshAuthentication.Phoenix.Controller

  def home(conn, _activity) do
    render(conn, :home)
  end
end
