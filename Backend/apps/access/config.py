from djchoices import DjangoChoices, ChoiceItem

COMMON_CHAR_FIELD_MAX_LENGTH = 512
COMMAN_NULL_DEFAULT_CONFIG = {
    "default": None,
    "null": True
}
COMMAN_BLANK_NULL_DEFAULT_CONFIG = {
    **COMMAN_NULL_DEFAULT_CONFIG,
    "blank": True
}