import React from 'react'
import Layout from '../components/layout'

/**
 * トップページに対応するReactコンポーネント
 * ReactElementを返す関数になっている
 */
export default () => (
  <Layout title="Hello">
    <h2>Hello world!</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus erat at tristique iaculis. Curabitur vitae erat finibus, sodales nulla vitae, consequat mauris. Fusce fermentum venenatis sem, ac maximus lacus rutrum eget. Cras fermentum mollis odio sit amet iaculis. Phasellus condimentum faucibus lorem sed rutrum. Donec pulvinar et tellus id venenatis. Nullam vel odio vitae massa condimentum ullamcorper at vitae enim. Aenean facilisis arcu nec felis tincidunt, ornare rutrum lectus tincidunt. Sed purus urna, dapibus eu auctor a, lacinia eget mauris. Donec magna diam, egestas varius facilisis vel, commodo in leo.
    </p>
  </Layout>
)
