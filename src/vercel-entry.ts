import { handle } from 'hono/vercel'
import { Hono } from 'hono'
import { App } from './app'
import { AlbumController, ArtistController, SearchController, SongController } from '#modules/index'
import { PlaylistController } from '#modules/playlists/controllers'

let appHandler: ReturnType<typeof handle>

try {
  const app = new App([
    new SearchController(),
    new SongController(),
    new AlbumController(),
    new ArtistController(),
    new PlaylistController()
  ]).getApp()
  appHandler = handle(app)
} catch (e: any) {
  const errApp = new Hono()
  errApp.all('*', (c) => c.json({
    success: false,
    message: 'App initialization failed',
    error: String(e),
    stack: e?.stack
  }, 500))
  appHandler = handle(errApp)
}

export default appHandler