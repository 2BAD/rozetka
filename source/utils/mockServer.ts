import { URL } from 'url'
import nock, { Definition } from 'nock'

type Mock = Promise<{
  done: () => void
  context: nock.BackContext
}>

/**
 * Mock server with fixture recording and playback support
 * @param url context specific module url
 * @param file file name for stub object
 */
export const server = (url: string, file: string): Mock => {
  nock.back.fixtures = new URL('./__fixtures__/', url).pathname

  return nock
    .back(file, {
      before,
      afterRecord
    })
    .then(({ nockDone, context }) => ({
      // just for aesthetical reasons
      done: nockDone,
      context
    }))
}

const stripTimestamp = (path: string): string => {
  return path.replace(/(&r=[0,1]\.\d+)|(r=[0,1]\.\d+&)/g, '')
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
