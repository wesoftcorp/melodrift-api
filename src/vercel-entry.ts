import { handle } from 'hono/vercel'
import { App } from './app'
import { AlbumController, ArtistController, SearchController, SongController } from '#modules/index'
import { PlaylistController } from '#modules/playlists/controllers'

const app = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController()
]).getApp()

export const config = {
  runtime: 'nodejs',
  maxDuration: 30
}

export default handle(app)
