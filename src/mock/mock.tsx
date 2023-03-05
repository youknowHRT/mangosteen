import { faker } from '@faker-js/faker'
import { AxiosRequestConfig } from 'axios';

type Mock = (config: AxiosRequestConfig) => [number, any]

faker.setLocale('zh_CN');

export const mockSession: Mock = (config) => {
  return [200, {
    jwt: faker.random.word()
  }]
}

export const mockTagIndex: Mock = (config) => {
  const createTag = (n = 1, attrs?: any) =>
    Array.from({ length: n }, (v, i) => i+1).map((id) => ({
      id,
      name: faker.lorem.word(),
      sign: faker.internet.emoji(),
      kind: config.params.kind,
      ...attrs
    }))

  if (config.params.kind === 'expenses') {
    return [200, { resources: createTag(72) }]
  } else {
    return [200, { resources: createTag(20) }]
  }

}

