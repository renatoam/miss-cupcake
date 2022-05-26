import { AxiosResponse } from 'axios'
import { readFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'
import path from 'path'
import { ProductDTO, ProductsResponse } from '../../types'

export default function handler(_request: NextApiRequest, response: NextApiResponse<AxiosResponse<ProductsResponse>>) {
  const { serverRuntimeConfig } = getConfig()
  const dir = path.join(serverRuntimeConfig.PROJECT_ROOT, './public');
  const data = JSON.parse(readFileSync(`${dir}/data.json`, 'utf8'))

  return response.status(200).json(data)
}
