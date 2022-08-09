from django.db import models


class Note(models.Model):
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def get_title(self):
        return self.text.split("\n")[0]

    def get_subtitle(self):
        for line in self.text.split("\n")[1:]:
            if line.strip() != "":
                return line[:20]

    def __str__(self):
        return self.get_title()
