import { z } from 'zod'

export const SongLyricsAPIResponseModel = z.object({
  lyrics: z.string().optional(),
  script_tracking_url: z.string().optional(),
  lyrics_copyright: z.string().optional(),
  snippet: z.string().optional(),
  status: z.string().optional()
})

export const SongLyricsModel = z.object({
  lyrics: z.string().openapi({
    description: 'HTML-formatted or newline lyrics string',
    example: 'Tu Hi Ye Mujhko Bata De<br>Chahun Main Ya Naa'
  }),
  snippet: z.string().optional().openapi({
    description: 'Snippet / preview description'
  }),
  copyright: z.string().optional().openapi({
    description: 'Copyright attribution for lyrics'
  })
})
