import { URL } from 'url'
import nock, { Definition } from 'nock'

type Mock = {
  done: () => void
  context: nock.BackContext
}

/**
 * Mock server with fixture recording and playback support
 * @param url context specific module url
 * @param file file name for stub object
 */
export const server = (url: string, file: string): Promise<Mock> => {
  nock.back.fixtures = new URL('./__fixtures__/', url).pathname

  return nock
    .back(file, {
      before,
      afterRecord
    })
    .then(({ nockDone, context }) => ({
      done: () => {
        // restore the HTTP interceptor to the normal unmocked behaviour
        nock.restore()
        nockDone()
      },
      context
    }))
}

/**
 * Match end replace any occurrences of `r=*` in query string
 */
const stripTimestamp = (path: string): string => {
  return path.replace(/(?<=\?|&)r=[^&]*/g, '')
}

const before = (scope: Definition): void => {
  // @ts-expect-error it does exist
  scope.filteringPath = stripTimestamp
}

const afterRecord = (fixtures: Definition[]): Definition[] =>
  fixtures.map((f) => {
    f.path = stripTimestamp(f.path)
    return f
  })
