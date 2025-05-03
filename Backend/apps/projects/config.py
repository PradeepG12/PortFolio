from djchoices import DjangoChoices, ChoiceItem

media_storage_path = f"instance.__class__.__name__/file_name.lower()"

class ProjectStatus(DjangoChoices):
    LOCAL = ChoiceItem("local", "Local")
    IN_PROGRESS = ChoiceItem("in_progress", "In Progress")
    PUBLISHED = ChoiceItem("published", "Published")

