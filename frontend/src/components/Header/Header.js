import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component
{
  render ()
  {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="#">Accueil <span class="sr-only">(current)</span></a>
          <a class="nav-link" href="#">Discussions</a>
          <form class="form-inline">
           <input class="form-control mr-sm-2" type="search" placeholder="taper ici" aria-label="Search"/>
           <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
          </form>
        <a class="nav-link" href="#">Profil</a>
        <a class="nav-link " href="#">Déconnexion</a>
        </div>
    </div>
    </nav>
    )
  }
}
export default Header;