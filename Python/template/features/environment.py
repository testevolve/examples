import testevolve.core.hooks as hooks

def before_all(context):
    hooks.before_all(context)


def before_scenario(context, scenario):
    hooks.before_scenario(context, scenario)


def after_scenario(context, scenario):
    hooks.after_scenario(context, scenario)


def after_all(context):
    hooks.after_all(context)
