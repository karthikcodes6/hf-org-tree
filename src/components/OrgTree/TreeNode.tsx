import * as React from "react";
import type { ReactNode } from "react";

export interface TreeNodeProps {
  /**
   * The node label
   * */
  className?: string;
  children?: ReactNode;
  renderNode?: (node) => ReactNode;
  data: any;
}

export function TreeNode({ children, className, renderNode = (data) => data.name, data }: TreeNodeProps) {
  return (
    <li className={`node node-lines ${className || ""}`}>
      {renderNode(data)}
      {React.Children.count(children) > 0 && <ul className="children-container">{children}</ul>}
      <style jsx>{`
        .node {
          flex: auto;
          text-align: center;
          list-style-type: none;
          position: relative;
          padding: var(--tree-line-height) var(--tree-node-padding) 0 var(--tree-node-padding);
        }
        .node-lines::before,
        .node-lines::after {
          content: "";
          position: absolute;
          top: 0;
          height: var(--tree-line-height);
          box-sizing: border-box;
          right: 50%;
          width: 50%;
          border-top: var(--tree-line-width) solid var(--tree-line-color);
        }
        .node-lines::after {
          left: 50%;
          border-left: var(--tree-line-width) solid var(--tree-line-color);
        }
        .node-lines:only-of-type {
          padding: 0;
        }
        .node-lines:only-of-type::after,
        .node-lines:only-of-type::before {
          display: none;
        }
        .node-lines:first-of-type::before {
          border: 0 none;
        }
        .node-lines:first-of-type::after {
          border-radius: var(--tree-line-border-radius) 0 0 0;
        }
        .node-lines:last-of-type::before {
          border-right: var(--tree-line-width) solid var(--tree-line-color);
          border-radius: 0 var(--tree-line-border-radius) 0 0;
        }
        .node-lines:last-of-type::after {
          border: 0 none;
        }

        .children-container {
          display: flex;
          padding-inline-start: 0;
          margin: 0;
          padding-top: var(--tree-line-height);
          position: relative;
        }
        .children-container::before {
          content: "";
          position: absolute;
          top: 0;
          height: var(--tree-line-height);
          box-sizing: border-box;
          left: 50%;
          width: 0;
          border-left: var(--tree-line-width) solid var(--tree-line-color);
        }
      `}</style>
    </li>
  );
}
