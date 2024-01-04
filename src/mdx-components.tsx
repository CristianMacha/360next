import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({children}) => <h2 className="text-[2em] font-medium">{children}</h2>,
        h2: ({children}) => <h2 className="text-[1.5em] font-medium">{children}</h2>,
        h3: ({children}) => <h2 className="text-[1.2em] font-normal">{children}</h2>,
        p: ({children}) => <h2 className="text-[1em] font-normal">{children}</h2>,
        ...components
    }
}