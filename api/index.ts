import { handle } from 'hono/vercel'
import { AlbumController, ArtistController, SearchController, SongController } from '../src/modules/index'
import { PlaylistController } from '../src/modules/playlists/controllers/index'
import { App } from '../src/app'

const app = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController()
]).getApp()

export default handle(app)
