import { ExDoisPage } from "./pages/exDoisPage"
import { ExUmPage } from "./pages/exUmPage"
import { TemplateFooterDefault } from "./template/template-footer-default"
import { TemplateHeaderDefault } from "./template/template-header-default copy"


function App() {

  return (
    <>
      <TemplateHeaderDefault />
      {/* <ExUmPage /> */}
      <ExDoisPage />
      <TemplateFooterDefault />
    </>
  )
}

export default App
