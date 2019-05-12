const defaultOptions = ['path.join', 'path.resolve']
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disallow path.join() or path.resolve() use literal path separator "/: or "\\"',
      category: 'Node.js and CommonJS',
      recommended: true,
      url: 'https://github.com/qiu8310/eslint-plugin-serpent/blob/master/docs/rules/no-path-sep.md'
    },
    schema: [
      {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    ]
  },

  create(context) {
    const prefixes = context.options.length ? context.options[0] : defaultOptions

    return {
      CallExpression(node) {
        let prefix
        if (node.callee.type === 'MemberExpression') {
          prefix = getMemberExpressionPrefix(node.callee)
          if (!prefixes.includes(prefix)) return
        }

        node.arguments.forEach(arg => {
          if (arg.type === 'Literal' && (arg.value.includes('/') || arg.value.includes('\\'))) {
            context.report({ node: arg, message: 'should not contains "/" or "\\".' });
          }
        })
      }
    }
  }
}

function getMemberExpressionPrefix(node) {
  let prefix = []
  if (node.object.type === 'MemberExpression') {
    prefix.push(...getMemberExpressionPrefix(node.object))
  } else if (node.object.type === 'Identifier') {
    prefix.push(node.object.name)
  } else {
    return
  }
  if (node.property.type !== 'Identifier') {
    return
  }

  prefix.push(node.property.name)

  return prefix.join('.')
}
