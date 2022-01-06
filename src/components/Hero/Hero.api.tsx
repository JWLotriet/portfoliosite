import parse from "html-react-parser"

export const api = {
  headline: "Protecting and preserving africa's legacy for future generations",
  children: parse(
    "<p>Lorem ipsum porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur.</p>"
  ),
}
